let id = parseInt(localStorage.getItem("maxId") || "0");
const createId = () => {
  id += 1;
  localStorage.setItem("maxId", JSON.stringify(id));
  return id;
};
export { createId };
