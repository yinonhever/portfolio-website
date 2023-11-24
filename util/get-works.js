import axios from "axios";

const getWorks = async () => {
  const { data } = await axios.get(
    "https://portfolio-a5021-default-rtdb.firebaseio.com/works.json"
  );
  return data;
};

export default getWorks;