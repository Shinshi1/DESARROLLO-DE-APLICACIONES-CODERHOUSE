import { v4 as uuidv4 } from "uuid"

export const idGenerator = () => {
  id = uuidv4()
  console.log('id', id)
  return id;
};