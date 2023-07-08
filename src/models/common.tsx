import {NextComponentType, NextPage, NextPageContext} from "next";
import {AppProps} from "next/app";
import {LayoutKeys} from "@/components/Layouts";

export type MyAppProps = AppProps & {
    Component: NextComponentType<NextPageContext, any, any> & {
        Layout: LayoutKeys;
    };
};

export interface CommonEntity {
    _id: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ResponseEntity {
    status: number,
    message: string,
    object: object | undefined | null
}