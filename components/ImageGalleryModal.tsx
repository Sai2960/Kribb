import ImageViewing from "react-native-image-viewing";

type Props = {
  images: string[];
  imageIndex: number;
  visible: boolean;
  onRequestClose: () => void;
};

export default function ImageGalleryModal({
  images,
  imageIndex,
  visible,
  onRequestClose,
}: Props) {
  return (
    <ImageViewing
      images={images.map((uri) => ({ uri }))}
      imageIndex={imageIndex}
      visible={visible}
      onRequestClose={onRequestClose}
    />
  );
}