import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Select,
  Text,
  Input,
  Spinenr,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "@/utils/FilterData";

const SearchFilters = () => {
  const router = useRouter();

  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };

  return (
    <Flex bg={"#F2F0F0"} p={4} justifyContent={"center"} flexWrap={"wrap"}>
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
              <option value={item.value} key={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
