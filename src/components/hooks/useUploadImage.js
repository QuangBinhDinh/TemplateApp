import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadImage } from '@user/service';

const base64Prefix = 'data:image/jpg;base64,';

export const useUploadImage = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleImageSuccess = data => {
        setLoading(false);
        var url = data.upload[0];
        if (url) {
            setImageUrl(url);
        }
    };
    const handleImageFail = data => {
        setLoading(false);
    };
    /**
     * Mở thư viện ảnh và call api upload
     * @param {function} callback callback khi upload ảnh thành công
     * @returns
     */
    const openImageLib = async () => {
        // mở thư viện ảnh
        try {
            var res = await launchImageLibrary({ mediaType: 'photo' });
            if (res) {
                console.log(res?.assets[0]);
                var image = res?.assets[0];
                if (image) {
                    var imageData = {
                        name: image.fileName,
                        type: image.type,
                        uri: image.uri,
                    };
                    setLoading(true);
                    dispatch(uploadImage(imageData, handleImageSuccess, handleImageFail));
                }
            }
        } catch (err) {}
    };

    return {
        imageUrl,
        openImageLib,
        loading,
    };
};
