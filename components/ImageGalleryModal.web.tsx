import { useState, useEffect } from "react";
import { Modal, View, Image, TouchableOpacity, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  const [index, setIndex] = useState(imageIndex);
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    setIndex(imageIndex);
  }, [imageIndex, visible]);

  if (!visible) return null;

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onRequestClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.9)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={onRequestClose}
          style={{ position: "absolute", top: 20, right: 20, zIndex: 10 }}
        >
          <Ionicons name="close" size={32} color="white" />
        </TouchableOpacity>

        <Image
          source={{ uri: images[index] }}
          style={{ width: width * 0.9, height: height * 0.75 }}
          resizeMode="contain"
        />

        {images.length > 1 && (
          <>
            <TouchableOpacity
              onPress={goPrev}
              style={{ position: "absolute", left: 20, top: "50%" }}
            >
              <Ionicons name="chevron-back" size={36} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goNext}
              style={{ position: "absolute", right: 20, top: "50%" }}
            >
              <Ionicons name="chevron-forward" size={36} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "white", marginTop: 12 }}>
              {index + 1} / {images.length}
            </Text>
          </>
        )}
      </View>
    </Modal>
  );
}