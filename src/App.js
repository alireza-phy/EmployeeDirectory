import './App.css';
import ContactsPage from "./components/ContactsPage/ContactsPage";
import ContactsContextProvider from "./components/Context/ContactsContext";

function App() {
    return (
        <ContactsContextProvider>
            <ContactsPage/>
        </ContactsContextProvider>
    );
}

export default App;
