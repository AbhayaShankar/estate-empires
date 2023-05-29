import { useState } from "react";
import { Flex, Box, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "@/utils/FilterData";
import millify from "millify";

const SearchFilters = () => {
  const router = useRouter();

  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <Flex bg={"#f8f8f8"} p={4} justifyContent={"center"} flexWrap={"wrap"}>
      {filters.map((filter) => (
        <Box key={filter.queryName} paddingX={1}>
          <Select
            placeholder={filter.placeholder}
            width={"fit-content"}
            paddingX={"8px"}
            paddingY={2}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option
                style={{ letterSpacing: "0.5px" }}
                value={item.value}
                key={item.name}
              >
                {millify(item.name)}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
