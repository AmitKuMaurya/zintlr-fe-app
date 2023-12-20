import React from "react";
import { Space, Table, Tag, Select } from "antd";
import { LiaArrowRightSolid } from "react-icons/lia";
import "./customerTable.css";
import { TableData } from "../../constants/table.data";
import { CiSearch } from "react-icons/ci";

const CustomerTable = () => {
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Assets",
      dataIndex: "assets",
      key: "assets",
      render: (tags) => (
        <>
          <p>{tags.amount}</p>
          {tags.units.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <>
                <Tag color={color} key={tag}>
                  {tag.toLowerCase()}
                </Tag>
              </>
            );
          })}
        </>
      ),
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "KYC Status",
      dataIndex: "kyc_status",
      key: "kyc_status",
      render: (status) => {
        {
          var color = status.length < 5 ? "green" : "red";
          console.log("status: ", status.length);
          if (status === "Progress") {
            color = "orange";
          }
        }
        return (
          <>
            <Tag color={color}>{status}</Tag>
          </>
        );
      },
    },
    {
      title: "Facilitator",
      dataIndex: "facilitator",
      key: "facilitator",
      render: (ele) => {
        return (
          <div className="facilitator">
            <div>
              <p>{ele.business.name}</p>
              <p>{ele.business.user}</p>
            </div>
            <div>
              <LiaArrowRightSolid />
            </div>
            <div>
              <p>{ele.associate.name}</p>
              <p>{ele.associate.user}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Zone",
      dataIndex: "zone",
      key: "zone",
    },
    {
      title: "Account Type",
      dataIndex: "account_type",
      key: "account_type",
    },
    {
      title: "TPA",
      key: "tpa",
      dataIndex: "tpa",
    },
  ];

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  //   const onSearch = (value) => {
  //     console.log('search:', value);
  //   };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <div className="heading">Consumers Overview</div>
      <div className="customer-nav">
        <div>
          <input type="text" name="" id="" placeholder="Search Customer Name" />
          <h1>
            <CiSearch />
          </h1>
        </div>
        <div>
          {/* sort, filter, reset */}
          <Select
            showSearch
            placeholder="Filter By Zone or KYC Status"
            // optionFilterProp="children"
            onChange={onChange}
            // onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "east",
                label: "Filter By East Zone",
              },
              {
                value: "west",
                label: "Filter By West Zone",
              },
              {
                value: "north",
                label: "Filter By North Zone",
              },
              {
                value: "south",
                label: "Filter By South Zone",
              },
            ]}
          />

          <Select
            showSearch
            placeholder="Sort By Name or Revenue"
            // optionFilterProp="children"
            onChange={onChange}
            // onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "name",
                label: "Sort By Name A - Z",
              },
              {
                value: "name",
                label: "Sort By Name Z- A",
              },
              {
                value: "asc",
                label: "Sort By Revenue ASC",
              },
              {
                value: "desc",
                label: "Sort By Revenue DESC",
              },
            ]}
          />
        </div>
      </div>
      <Table
        columns={columns}
        pagination={{ pageSize: 4 }}
        dataSource={TableData}
      />
    </>
  );
};
export default CustomerTable;
