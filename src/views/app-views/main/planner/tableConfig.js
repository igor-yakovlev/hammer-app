import { ImageList } from "./ImageList/ImageList";
import { ItemPics, ItemTypes } from "./types/ItemTypes";

export const tabList = [
  {
    key: "tables",
    tab: "Новые столы",
  },
  {
    key: "plants",
    tab: "Новые растения",
  },
];

export const dataFurnitures = [
  {
    type: ItemTypes.TABLE_4_CHAIRS,
    src: ItemPics[ItemTypes.TABLE_4_CHAIRS],
  },
  {
    type: ItemTypes.TABLE_5_CHAIRS,
    src: ItemPics[ItemTypes.TABLE_5_CHAIRS],
  },
  {
    type: ItemTypes.MIDDLE_SOFA,
    src: ItemPics[ItemTypes.MIDDLE_SOFA],
  },
  {
    type: ItemTypes.LEFT_SOFA,
    src: ItemPics[ItemTypes.LEFT_SOFA],
  },
];

export const dataPlants = [
  {
    type: ItemTypes.PLANT_1,
    src: ItemPics[ItemTypes.PLANT_1],
  },
  {
    type: ItemTypes.PLANT_2,
    src: ItemPics[ItemTypes.PLANT_2],
  },
  {
    type: ItemTypes.PLANT_3,
    src: ItemPics[ItemTypes.PLANT_3],
  },
  {
    type: ItemTypes.PLANT_4,
    src: ItemPics[ItemTypes.PLANT_4],
  },
];

export const contentList = (handler) => ({
  tables: <ImageList data={dataFurnitures} onClick={handler} />,
  plants: <ImageList data={dataPlants} onClick={handler} />,
});
