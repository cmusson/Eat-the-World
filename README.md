# Eat-the-World
App detailing the different foods of the world


const [allItems, setAllItems] = useState([])
const [filterCriteria, setFilterCriteria] = useState('some search string')
const [filteredItems, setFilteredItems] = useState([])

But this can cause all sorts of problems when trying to keep allItems, filterCriteria and filteredItems in sync. And that's because we are copying data from one place to another. In reality filteredItems should not be its own state. It can be purely derived from allItems and filterCriteria so instead we should do (pseudocode)

const [allItems, setAllItems] = useState([])
const [filterCriteria, setFilterCriteria] = useState('some search string')
const filteredItems = allItems.filter(item => filterCriteria.matches(item))