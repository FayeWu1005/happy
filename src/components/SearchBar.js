import React, {useState} from "react";
import {InputGroup, InputGroupAddon, Input, Button} from "reactstrap";

export default function SearchBar(props){
  const [innerSearch, setInnerSearch] = useState("");

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Input 
          aria-labelledby="search-button"
          name="search"
          id="search"
          type="search"
          placeholder="Finland"
          value={innerSearch}
          onChange={(e) => {
            setInnerSearch(e.target.value) 
          }} />
        </InputGroupAddon>
        
        <Button 
          color="secondary"
          id="search-bt"
          type="button"
          onClick={() => props.onSubmit(innerSearch)}
        >Search</Button>
      </InputGroup>        
    </div>
  )
}