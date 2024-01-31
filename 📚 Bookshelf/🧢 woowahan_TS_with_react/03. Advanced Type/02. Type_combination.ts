// 🌟 교차 타입과 유니온 타입
// type alias를 사용해 중복을 줄일 수 있다.
type ProductItem = {
  id: number;
  name: string;
  type: string;
  image_url: string;
  price: number;
};

type CardItem = {
  id: number;
  name: string;
  type: string;
  image_url: string;
};

type PromotionEventItem = ProductItem | CardItem;

// 합집합
const print_item = (item: ProductItem & CardItem) => {
  console.log(item.name);
  console.log(item.price);
};

// 교집합
const printItem = (item: PromotionEventItem) => {
  console.log(item.name); // ok
  console.log(item.price); // 🚨 컴파일 에러 발생
};

// 교차 타입과 유니온 타입은 여러 줄에 걸쳐 표기하는 것도 가능하다.
/**
 * 
type ProductWithRole = 
& ProductItem 
& ROLE;

type PromotionEventItem2 = 
| ProductItem 
| CardItem;

 */

// ===========================================================================

// 맵드 타입 예시

// 존재하는 모든 키에 대해 일일이 스토어를 만들어줄 경우 불필요한 반복이 발생한다.
type BottomSheetStore = {
  RECENT: {
    resolver?: (payload: any) => void;
    args?: any;
    isOpened: boolean;
  };
  SELECT: {
    resolver?: (payload: any) => void;
    args?: any;
    isOpened: boolean;
  };
  FILTER: {
    resolver?: (payload: any) => void;
    args?: any;
    isOpened: boolean;
  };
  // ...
};

const BottomSheetMap = {
  //
};

export type BOTTOM_SHEET_ID = keyof typeof BottomSheetMap;

// 🌟 인덱스 시그니처 문법을 사용해 각 키에 해당하는 스토어를 선언해 반복 작업을 효율적으로 처리할 수 있다.
type BottomSheetStore2 = {
  [index in BOTTOM_SHEET_ID]: {
    resolver?: (payload: any) => void;
    args?: any;
    isOpened: boolean;
  };
};
