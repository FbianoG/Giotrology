import { useState } from 'react'

import Header from '../components/Header'
import SectionApresentation from '../components/SectionApresentation'
import SectionBlog from '../components/SectionBlog'
import SectionPrice from '../components/SectionPrice'
import SectionSign from '../components/SectionSign'
import Footer from '../components/Footer'









export default function Home() {

    return (
        <>
            <Header />
            <div className="content">
                <SectionApresentation />
                <SectionBlog />
                <SectionSign />
                <SectionPrice />
            </div>
            <Footer />
        </>
    )
}