import Box from "@/components/base/Box";
import Modal from "@/components/base/Modal";
import VariantButton from "@/components/base/VariantButton";
import Image from "next/image";
import { useState } from "react";

interface ChooseBannerModalInterface {
  onClose: () => void;
  onSave: (src: string) => void;
  show: boolean;
  images: Array<string>;
}

const ChooseBannerModal = ({
  onClose,
  onSave,
  show,
  images,
}: ChooseBannerModalInterface) => {
  const [currentChooseImage, setCurrentChooseImage] = useState("");

  const handleOnChooseImage = (src: string) => {
    setCurrentChooseImage(src);
  };

  return (
    <Modal className="choose-banner-modal" show={show}>
      <Box className="choose-banner-group">
        <Box className="choose-banner-container choose-banner-title">
          <p>Choose a banner</p>
        </Box>
        <Box className="choose-banner-container choose-banner-images">
          {images.map((img) => (
            <Image
              className={`choose-banner-img${
                img === currentChooseImage ? " has-chosen-banner-img" : ""
              }`}
              onClick={() => handleOnChooseImage(img)}
              key={img}
              src={img}
              width={150}
              height={200}
              alt=""
            />
          ))}
        </Box>
        <Box className="choose-banner-container choose-banner-btn-group">
          <VariantButton
            variant="text"
            className="choose-banner-close-btn"
            onClick={onClose}
          >
            Close
          </VariantButton>
          <VariantButton
            variant="contained"
            className="choose-banner-save-btn"
            onClick={() => onSave(currentChooseImage)}
          >
            Save
          </VariantButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChooseBannerModal;
