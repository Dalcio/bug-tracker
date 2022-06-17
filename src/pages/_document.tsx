import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';
import { resetServerContext } from 'react-beautiful-dnd';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await getInitialProps(ctx);

    resetServerContext();

    return { ...initialProps };
  }
}
