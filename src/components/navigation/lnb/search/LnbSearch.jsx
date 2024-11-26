import { IconButton, TextButton } from '@/components/common/buttons'
import { Flex } from '@/components/layout'
import Label from '@/components/common/label/Label'
import { Typography } from '@/components/common/typography/Typography'
import { SearchIcon } from '@/components/icon/common/Search'
import useClickOutside from '@/hooks/use-click-outside/useClickOutside'
import useDisclosure from '@/hooks/use-disclosure/useDisclosure'
import useDebounce from '@/hooks/useDebounce'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useRef, useState } from 'react'
import useLnbMenu from '../menu/hook/useLnbMenu'
import * as SC from './LnbSearch.style'
import CloseIcon from './asset/CloseIcon'
import useLnbSearchEvent from './hook/useLnbSearchEvent'
import useSearchMenu from './hook/useSearchMenu'

const SearchResultContainer = ({ isMobile, children, close, opened, mobileSearchOpened }) => {
  const resultRef = useRef(null)
  useClickOutside([resultRef], close, opened)

  if (isMobile) {
    return mobileSearchOpened ? <SC.MobileSearchResultContainer>{children}</SC.MobileSearchResultContainer> : <></>
  }

  return opened ? <SC.SearchResultContainer ref={resultRef}>{children}</SC.SearchResultContainer> : <></>
}

const LnbSearch = ({ isMobile, handleCloseLnb }) => {
  const [searchResult, setSearchResult] = useState([])

  const inputRef = useRef(null)
  const router = useRouter()

  const [mobileSearchOpened, { open: openMobileSearch, close: closeMobileSearch }] = useDisclosure(false)
  const [opened, { open, close }] = useDisclosure(false)

  const { selectedIndex, handleMouseEnter } = useLnbSearchEvent(searchResult)
  const { searchMenu, highlightKeyword } = useSearchMenu()
  const { handleClickMenu } = useLnbMenu()

  const clearInput = () => {
    inputRef.current.value = ''
    setSearchResult(searchMenu(''))
  }

  const handleClickCancel = () => {
    clearInput()
    closeMobileSearch()
  }

  const handleChange = useDebounce(e => {
    if (!opened) open()
    setSearchResult(searchMenu(e.target.value))
  }, 200)

  useEffect(() => {
    if (!opened) clearInput()
  }, [opened])

  useEffect(() => {
    if (mobileSearchOpened) handleClickCancel()
  }, [router])

  return (
    <SC.Container>
      <SC.SearchForm onSubmit={e => e.preventDefault()}>
        <SC.SearchContainer>
          <SearchIcon style={{ position: 'absolute', zIndex: 2, top: '16px', left: '8px' }} />
          <SC.SearchInput
            name="keyword"
            placeholder="메뉴명을 검색하세요."
            onChange={handleChange}
            autoComplete="off"
            onFocus={isMobile ? openMobileSearch : open}
            ref={inputRef}
          />
        </SC.SearchContainer>

        {isMobile && !mobileSearchOpened && (
          <IconButton type="button" onClick={handleCloseLnb}>
            <CloseIcon />
          </IconButton>
        )}

        {isMobile && mobileSearchOpened && (
          <TextButton type="button" td="none" onClick={handleClickCancel}>
            취소
          </TextButton>
        )}
      </SC.SearchForm>

      <SearchResultContainer isMobile={isMobile} close={close} opened={opened} mobileSearchOpened={mobileSearchOpened}>
        <SC.SearchResult>
          {searchResult.length === 0 && (
            <Typography.Caption1 ta="center" c="#999999" style={{ margin: 'auto' }}>
              관련된 메뉴명이 없습니다.
            </Typography.Caption1>
          )}

          {searchResult.map((menu, idx) => (
            <Fragment key={`${menu.id}_${idx}`}>
              <Link
                href={menu.isParents ? menu.path : menu.path[0]}
                onClick={e => handleClickMenu(e, menu.isParents ? menu.path : menu.path[0])}
              >
                <li
                  className={menu.isParents ? 'tab-title' : 'menu-item'}
                  data-selected={idx + 1 === selectedIndex}
                  onMouseEnter={() => handleMouseEnter(idx + 1)}
                >
                  <Flex justify="space-between">
                    <div>
                      {menu.isParents ? (
                        <Typography.Body3 c={'#999999'}>
                          {menu.tabTitle}/
                          {highlightKeyword(menu.title).map((el, idx2) => (
                            <span key={`${el}_${idx2}`} className={el.isKeyword ? 'text_highlight' : ''}>
                              {el.text}
                            </span>
                          ))}
                        </Typography.Body3>
                      ) : (
                        <Typography.Title2 fw={500}>
                          {highlightKeyword(menu.title).map((el, idx2) => (
                            <span key={`${el}_${idx2}`} className={el.isKeyword ? 'text_highlight' : ''}>
                              {el.text}
                            </span>
                          ))}
                        </Typography.Title2>
                      )}
                    </div>

                    {menu.isLabel && <Label text={'준비중'} color="primary" />}
                  </Flex>
                </li>
              </Link>
            </Fragment>
          ))}
        </SC.SearchResult>
      </SearchResultContainer>
    </SC.Container>
  )
}

export default LnbSearch
