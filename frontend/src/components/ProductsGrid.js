import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ShowLoader } from '../components/ShowLoader'
import { ui } from '../reducers/ui'
import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'
import { Radio } from '../lib/Radio'

const FeaturedContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px 20px 20px;
`
const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 100%;
    grid-row-gap: 20px;
    @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2%;
    }
    @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2%;
    max-width: 1300px;
    }
`
const SortOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    margin-bottom: 20px;
`
const EmptyWrapper = styled.div`
    display: grid;
    align-self: center;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
`
const EmptyState = styled.h2`
    font-size: 14px;
    text-align: center;
`

export const ProductsGrid = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isLoading = useSelector((store) => store.ui.isLoading)
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [sort, setSort] = useState('newest')
  
    useEffect(() => {
      dispatch(ui.actions.setLoading(true))
      fetch(
        `https://ulve17-final-app.herokuapp.com/products?page=${page}&sort=${sort}&featured=false&featured=true&createdByAdmin=true`
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(ui.actions.setLoading(false))
          if (json.products) {
            setProducts(json.products)
          }
          setPage(json.page)
          setTotalPages(json.total_pages)
        })
    }, [page, sort, dispatch])
  
    const previousPage = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setPage(page - 1)
    }
  
    const nextPage = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setPage(page + 1)
    }
  

    return (
        <FeaturedContainer>
        {!isLoading && (
            <>
            <SortOptions>
                <Radio
                setState={setSort}
                state={sort}
                value="newest"
                text="New in"
                />
                <Radio
                setState={setSort}
                state={sort}
                value="high"
                text="€ highest to lowest"
                />
                <Radio
                setState={setSort}
                state={sort}
                value="low"
                text="€ lowest to highest"
                />
            </SortOptions>

            {products.length > 0 && (
                <>
                <Grid>
                    {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        _id={product._id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        price={product.price}
                        sold={product.sold}
                    />
                    ))}
                </Grid>

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    back={previousPage}
                    next={nextPage}
                />
                </>
            )}

            {products.length === 0 && (
                <EmptyWrapper>
                <EmptyState>
                    We have no shoes for sale at the moment.
                </EmptyState>
                </EmptyWrapper>
            )}
            </>
        )}
        {isLoading && <ShowLoader />}
        </FeaturedContainer>
    )
}