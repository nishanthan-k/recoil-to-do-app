function useGetLocalStorage(key) {
  return setTimeout(() => {
    JSON.parse(localStorage.getItem(key)) || [];
  }, 3000);
}

export default useGetLocalStorage;
