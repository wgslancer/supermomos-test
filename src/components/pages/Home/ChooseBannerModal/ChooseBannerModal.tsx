import Box from "@/components/base/Box";
import Modal from "@/components/base/Modal";
import VariantButton from "@/components/base/VariantButton";
import Image from "next/image";
import { useState } from "react";

interface ChooseBannerModalInterface {
  onClose: () => void;
  onSave: (src: string) => void;
  show: boolean;
}

const ChooseBannerModal = ({
  onClose,
  onSave,
  show,
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
            <Image
              className="choose-banner-img"
              onClick={() =>
                handleOnChooseImage(
                  "https://images.unsplash.com/photo-1673378165516-35873c36f9e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                )
              }
              key={img}
              src="https://images.unsplash.com/photo-1673378165516-35873c36f9e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
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
