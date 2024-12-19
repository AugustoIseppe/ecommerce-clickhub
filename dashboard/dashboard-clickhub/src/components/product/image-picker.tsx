'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { IconUpload } from '@tabler/icons-react';

import classes from './image-picker.module.css';

interface ImagePickerProps {
    label: string;
    name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {

    const [pickedImage, setPickedImage] = useState<null | string>(null);
    const imageInput = useRef<HTMLInputElement>(null);

    // Função para lidar com a escolha da imagem
    function handlePickImage() {
        if (imageInput.current) {
            imageInput.current.click();
        }
    }


    // Função para lidar com a mudança de imagem
    function handelImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files ? event.target.files[0] : null;

        console.log('Arquivo selecionado:', file); // Log do arquivo selecionado

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                console.log('Base64 da imagem:', fileReader.result); // Log do resultado do FileReader
                setPickedImage(fileReader.result);
            }
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>

            <label htmlFor={name}>{label}</label>
            <button type="button" onClick={handlePickImage} className='flex items-center justify-start bg-white border border-gray-300 rounded-md'>

                <div className={classes.controls}>
                    <div className={classes.preview}>
                        {!pickedImage && <IconUpload size={36} />}
                        {pickedImage &&
                            <Image
                                src={pickedImage}
                                alt="The image selected by the user"
                                fill
                            />
                        }
                    </div>
                    <input
                        className={classes.input}
                        type="file"
                        id={name}
                        name={name}
                        accept="image/png, image/jpeg"
                        ref={imageInput}
                        onChange={handelImageChange}
                        required
                    />
                </div>
            </button>
            {/* <button className={classes.button} type="button" onClick={handlePickImage}>
                <span className={classes.icon}></span>
                Selecionar Imagem
            </button> */}

        </div>
    );
}