import { useState } from "react";
import { FilterContainer, InputQuery } from "./styles";

interface FilterProps {
  filterIssues: (query: string) => void;
  total_count: number;
}

export function Filter({ total_count, filterIssues }: FilterProps) {
  const [query, setQuery] = useState("");

  function handleInputQueryFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setQuery(query);
    filterIssues(query);
  }

  return (
    <FilterContainer>
      <div>
        <span>Publicações</span>
        <span>{total_count} visualizações</span>
      </div>
      <InputQuery
        onChange={(event) => handleInputQueryFilter(event)}
        name="issue_filter"
        value={query}
      />
    </FilterContainer>
  );
}
