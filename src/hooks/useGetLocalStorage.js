function useGetLocalStorage(key) {
  // console.log(JSON.parse(localStorage.getItem(key)) || []);
  return JSON.parse(localStorage.getItem(key)) || [];
}

export default useGetLocalStorage;
