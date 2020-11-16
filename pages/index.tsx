import React from "react"
import SearchInput from "../components/Search/Search"
import Head from 'next/head'
import Breadcrumb from "../components/Breadcrum/Breadcrum"
import Price from "../components/Price/Price"
import Rate from "../components/Rate/Rate"
import ColorPicker from "../components/ColorPicker/ColorPicker"
import Button from "../components/Button/Button"
import ProductLayout from "../layouts/Product/Product1"
import IconCounter from "../components/IconCounter/IconCounter";
//import Product1 from "../assets/images/product1.svg.png"

const Test = () =><div>
    <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    <ProductLayout
        left={<></>}
        right={<>
            <SearchInput placeholder={"Search"} onSearch={opt => console.log(opt)}/>
            <IconCounter counter={2}/>
            <Breadcrumb items={[{label: "test", value: 1}, {label: "test2", value: 2}, {label: "test3", value: 3}]}/>
            <Rate itemRate={4} totalRate={5} votesQuantity={18}/>
            <Price price={5} oldPrice={6}/>
            <ColorPicker
                options={[{value: 1, label: "Black", color: "#000"}, {value: 2, label: "Other", color: "#f43"}]}
                value={1}
                onChange={(v) => console.log(v)}
            />
            <Button>Hi Beauty</Button>
        </>}
        pic={<div style={{backgroundColor: "blue"}}/>}
    />
</div>;

export default Test