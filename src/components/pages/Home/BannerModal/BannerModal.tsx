import { PictureIcon } from "@/components/assets/Icon";
import Box from "@/components/base/Box";
import Image from "next/image";
import {
  memo,
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import AddBannerButton from "../AddBannerButton";
import ChooseBannerModal from "../ChooseBannerModal";

interface BannerModalProps {
  bannerSrc: string;
  setBannerSrc: (src: string) => void;
  images: Array<string>;
  error?: boolean;
}

const BannerModal = ({
  bannerSrc,
  setBannerSrc,
  images,
  error,
}: BannerModalProps) => {
  const [showModal, setShowOpen] = useState<boolean>(false);
  const addImageBtnRef = useRef<HTMLButtonElement | null>(null);
  const handleOpenModal = () => {
    setShowOpen(true);
  };
  const handleCloseModal = () => {
    setShowOpen(false);
  };

  const handleOnSave = (src: string) => {
    handleCloseModal();
    setBannerSrc(src);
  };

  useEffect(() => {
    if (error) {
      addImageBtnRef.current?.scroll();
    }
  }, [error]);
  return (
    <Box className="add-banner__container">
      {!!bannerSrc ? (
        <Box>
          <Image
            className="banner-img"
            onClick={handleOpenModal}
            src={bannerSrc}
            alt="Banner Source"
            width={709}
            height={445}
          />
        </Box>
      ) : (
        <AddBannerButton
          ref={addImageBtnRef}
          type="button"
          value={bannerSrc}
          name="banner"
          className={`add-banner-btn${error ? " add-banner-btn--error" : ""}`}
          onClick={handleOpenModal}
        >
          <PictureIcon />
          <span>Add a banner</span>
        </AddBannerButton>
      )}

      <ChooseBannerModal
        images={images}
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleOnSave}
      />
    </Box>
  );
};

export default memo(BannerModal);
