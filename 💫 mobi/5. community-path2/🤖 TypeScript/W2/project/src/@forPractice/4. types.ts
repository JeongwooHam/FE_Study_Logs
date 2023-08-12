export class sampleTypes {
  first!: string;
  second!: number;
  third!: boolean;
}
export default class sampleTypes2 {
  first!: string;
  second!: number;
  third!: boolean;
}

const B = typeof sampleTypes;

console.log(B);

export const showTypes = (config: sampleTypes) => {
  console.log(config);
};
