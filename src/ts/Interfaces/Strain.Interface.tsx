interface StrainInterface {
  "id": object,
  "name": {
    "human": string,
    "robot": string,
    "detailUrl": string
  },
  "description": string,
  "imgUrl": string,
  "potency": object,
  "type": object,
  "score": number,
  "trustIndex": number,
  "parents": object
}

export default StrainInterface
