import { FilterContainer, InputQuery } from "./styles";

interface FilterProps {
  total_count: number;
}

export function Filter({ total_count }: FilterProps) {
  return (
    <FilterContainer>
      <div>
        <span>Publicações</span>
        <span>{total_count} visualizações</span>
      </div>
      <InputQuery />
    </FilterContainer>
  );
}
