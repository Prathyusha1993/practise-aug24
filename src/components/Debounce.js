import useDebounce from "./useDebounce";

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  
    // Debounce effect that triggers when `searchTerm` changes
    useEffect(() => {
      const handler = useDebounce((value) => {
        setDebouncedSearchTerm(value);
        console.log("Debounced search term:", value); // Make API call here or perform actions
      }, 500);
  
      handler(searchTerm);
  
      // Cleanup function to clear the timeout when the component unmounts or the searchTerm changes
      return () => {
        clearTimeout(handler);
      };
    }, [searchTerm]);
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <p>Debounced Search Term: {debouncedSearchTerm}</p>
      </div>
    );
  };
  
  export default SearchComponent;

//   export default useDebounce = (func, delay) => {
//     let timeoutid;
//     return function (...args){
//         if(timeoutid){
//             clearTimeout(timeoutid);
//         }
//         timeoutid = setTimeout(() => {
//             func(...args);
//         }, delay);
//     }
// }