"use client";
import Table from "@/app/components/Table";
import DeleteConfirmationModal from "@/app/components/users/deleteConfirmationModal";
import AddEditModal from "@/app/components/users/addEditModal";
import "@/app/globals.css";
import { Slider, Tooltip } from "@nextui-org/react";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import GeneralBreadcrumbs from "@/app/components/GeneralBreadcrumbs";
import { fetchNodProducts } from "@/services/api/productService";
import { Select, SelectItem } from "@nextui-org/react";

interface ProductFilterOptions {
  manufactures?: string[];
  minPrice?: number;
  maxPrice?: number;
  minWarranty?: number;
  maxWarranty?: number;
  minStock?: number;
  maxStock?: number;
}

export default function Users() {
  const [filtersData, setFiltersData] = useState<ProductFilterOptions>({});

  const [filters, setFilters] = useState({
    manufactures: [],
    price: [0, 1000],
    stock: [0, 500],
    warranty: [0, 5],
  });
  const [state, setState] = useState({
    products: [],
    totalPages: 0,
    currentPage: 1,
    isLoading: true,
    sortDescriptor: { column: "name", direction: "ascending" },
    modalSettings: {
      isOpenAddEdit: false,
      isOpenDelete: false,
      currentEntry: null,
    },
  });

  const appendQueriesToUrl = (
    queries: { key: string; value: string | number }[]
  ) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    queries.map((query) => {
      urlSearchParams.set(query.key, query.value.toString());
    });
    window.history.replaceState(null, "", "?" + urlSearchParams.toString());
  };

  const getUrlQueryElement = (key: string) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(key) || "";
  };

  const getAllUrlQueryElements = () => {
    // Enable downlevelIteration using an environment flag
    const urlParams = new URLSearchParams(window.location.search);

    // DownlevelIteration enabled, you can now iterate over the entries
    const filters = {};
    //@ts-ignore
    for (const [key, value] of urlParams.entries()) {
      //@ts-ignore
      filters[key] = value?.split(",");
    }

    return filters;
  };

  const fetchProducts = async () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
      products: [],
    }));

    const page = getUrlQueryElement("page");
    const search = getUrlQueryElement("search");

    const filters = getAllUrlQueryElements();

    try {
      const productsData = await fetchNodProducts(
        search || "",
        +page || 1,
        filters
      );

      console.log(productsData);

      const result = productsData;
      if (result) {
        setFiltersData(result.filters);
        setState((prevState) => ({
          ...prevState,
          products: result?.data || ([] as any),
          totalPages: result?.totalPages,
        }));
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    const init = async () => {
      appendQueriesToUrl([
        { key: "page", value: getUrlQueryElement("page") || 1 },
      ]);
      setState((prevState) => ({
        ...prevState,
        currentPage: Number(getUrlQueryElement("page")),
      }));
      await fetchProducts();
    };
    init();
  }, []);

  const handleAddEditModal = (id?: string) => {
    const userToEdit = state.products.find((user: any) => user.id === id);

    setState((prevState) => ({
      ...prevState,
      modalSettings: {
        ...prevState.modalSettings,
        isOpenAddEdit: true,
        currentEntry: userToEdit ?? null,
      },
    }));
  };

  const handleAddEdit = async () => {
    await fetchProducts();
  };

  const handleDeleteModal = (id: string) => {
    const userToDelete = state.products.find((user: any) => user.id === id);
    if (userToDelete) {
      setState((prevState) => ({
        ...prevState,
        modalSettings: {
          ...prevState.modalSettings,
          isOpenDelete: true,
          currentEntry: userToDelete,
        },
      }));
    }
  };

  const handleDelete = async () => {
    await fetchProducts();
  };

  const handleModalClose = () => {
    setState((prevState) => ({
      ...prevState,
      modalSettings: {
        ...prevState.modalSettings,
        isOpenAddEdit: false,
        isOpenDelete: false,
      },
    }));
  };

  const handleOnSearch = async (value: string) => {
    const queries = [
      {
        key: "search",
        value: value,
      },
    ];
    appendQueriesToUrl(queries);
    if (value == "") {
      setState((prevState) => ({
        ...prevState,
        currentPage: 1,
      }));
      appendQueriesToUrl([{ key: "page", value: 1 }]);
    }
    await fetchProducts();
  };

  const handlePageChange = async (page: number) => {
    setState((prevState) => ({
      ...prevState,
      currentPage: page,
    }));
    appendQueriesToUrl([{ key: "page", value: page.toString() }]);
    await fetchProducts();
  };

  const handleSortChange = async (sortDescriptor: any) => {
    setState((prevState) => ({
      ...prevState,
      users: [],
      sortDescriptor,
      currentPage: 1,
    }));
    appendQueriesToUrl([
      { key: "sortBy", value: sortDescriptor.column },
      { key: "sortOrder", value: sortDescriptor.direction },
      { key: "page", value: 1 },
    ]);
    await fetchProducts();
  };

  const handleFilterChange = async (key: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    appendQueriesToUrl([{ key, value }]);
    await fetchProducts();
  };

  const FilterComponent = () => {
    return (
      <div className="flex gap-4 w-full">
        <Select
          className="max-w-xs"
          label="Favorite Animal"
          placeholder="Select an animal"
          selectionMode="multiple"
          onSelectionChange={(values) =>
            handleFilterChange("manufactures", values)
          }
        >
          {filtersData?.manufactures?.map((name) => (
            <SelectItem key={name}>{name}</SelectItem>
          )) || []}
        </Select>

        <Slider
          className="max-w-md"
          // defaultValue={[
          //   filtersData?.minPrice || 0,
          //   filtersData?.maxPrice || 100,
          // ]}
          value={filters.price}
          formatOptions={{ style: "currency", currency: "USD" }}
          label="Price Range"
          minValue={filtersData?.minPrice}
          maxValue={filtersData?.maxPrice}
          step={1}
          onChangeEnd={(value) => handleFilterChange("price", value)}
        />
        <Slider
          label="Stock Range"
          // defaultValue={[
          //   filtersData?.minStock || 0,
          //   filtersData?.maxStock || 100,
          // ]}
          value={filters.stock}
          minValue={filtersData?.minStock || 0}
          maxValue={filtersData?.maxStock || 100}
          step={1}
          formatOptions={{ style: "decimal" }}
          className="max-w-md"
          onChangeEnd={(value) => handleFilterChange("stock", value)}
        />
        <Slider
          label="Warranty Range"
          // defaultValue={[
          //   filtersData?.minWarranty || 0,
          //   filtersData?.maxWarranty || 100,
          // ]}
          value={filters.warranty}
          minValue={filtersData?.minWarranty || 0}
          maxValue={filtersData?.maxWarranty || 100}
          step={1}
          formatOptions={{ style: "decimal" }}
          className="max-w-md"
          onChangeEnd={(value) => handleFilterChange("warranty", value)}
        />
      </div>
    );
  };

  return (
    <>
      <GeneralBreadcrumbs
        items={[
          {
            name: "Dashboard",
            href: "/dashboard",
          },
          {
            name: "NOD Products",
            href: "/dashboard/nod-products",
          },
        ]}
      />
      <Table
        columns={[
          { key: "code", label: "CODE", allowsSorting: true },
          // {
          //   key: "product_category_name",
          //   label: "CATEGORY",
          //   allowsSorting: true,
          // },
          {
            key: "manufacturerName",
            label: "MANUFACTURER",
            allowsSorting: true,
          },
          { key: "price", label: "PRICE", allowsSorting: true },
          { key: "warranty", label: "WARRANTY", allowsSorting: true },
          { key: "stock", label: "STOCK", allowsSorting: true },
          {
            key: "actions",
            label: "ACTIONS",
            className: "text-end",
            cell: (rowData) => (
              <div className="flex items-center gap-5">
                <Tooltip content="View Details">
                  <span
                    className="cursor-pointer text-center text-base text-blue-500 hover:text-blue-300 dark:text-white dark:hover:text-blue-500 w-full pl-5"
                    onClick={() => handleAddEditModal(rowData.id)}
                  >
                    <FaInfoCircle />
                  </span>
                </Tooltip>
              </div>
            ),
          },
        ]}
        isLoading={state.isLoading}
        hasSearchBar
        // addMore={() => handleAddEditModal()}
        data={state.products}
        page={state.currentPage}
        pages={state.totalPages}
        onSearchChange={handleOnSearch}
        onPageChange={handlePageChange}
        sortDescriptor={state.sortDescriptor}
        onSortChange={handleSortChange}
        filters={<FilterComponent />}
      />
      {state.modalSettings.isOpenAddEdit && (
        <AddEditModal
          isOpen={state.modalSettings.isOpenAddEdit}
          onOpenChange={handleModalClose}
          currentEntry={state.modalSettings.currentEntry}
          onUpdateUser={handleAddEdit}
        />
      )}
      {state.modalSettings.isOpenDelete && (
        <DeleteConfirmationModal
          isOpen={state.modalSettings.isOpenDelete}
          onConfirm={handleDelete}
          onClose={handleModalClose}
          currentEntry={state.modalSettings.currentEntry}
        />
      )}
    </>
  );
}
