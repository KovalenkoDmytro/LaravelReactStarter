import {useState} from "react";
import ImageUploading from 'react-images-uploading';

type ImageUploadProps = {
    onChange: (images) => void;
}

export default function ImageUpload({onChange} : ImageUploadProps) {

    const [images, setImages] = useState([]);

    const toChange = (imageList) => {
        setImages(imageList);
    };

    return(
        <ImageUploading
            multiple
            value={images}
            onChange={(imageList)=>{
                toChange(imageList)
                onChange(imageList)
            }}
            maxNumber={15}
            dataURLKey="data_url"
        >
            {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <button
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                    >
                        Click or Drop here
                    </button>
                    &nbsp;
                    <button onClick={onImageRemoveAll}>Remove all images</button>
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)}>Update</button>
                                <button onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </ImageUploading>
    )
}
