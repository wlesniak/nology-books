import { Label ,Nav,NavItem, NavLink} from 'reactstrap';

export default function Header() {
    return (
        <header>
        <h2>Book Review</h2>
        <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/addBook">Add Book</NavLink>
        </NavItem>
        </Nav>
      </header>
    )
}