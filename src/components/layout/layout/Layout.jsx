import useDisclosure from "@/hooks/use-disclosure/useDisclosure";
import { Flex } from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Page } from "@/components/layout";
import * as SC from "./Layout.styles";
import { Popup, usePopup } from "@/components/overlay/popup";

const Layout = ({ children }) => {
  const router = useRouter();

  const [mobileLnbOpen, { open: openMobileLnb, close: closeMobileLnb }] =
    useDisclosure(false);

  /** mobile lnb 활성화 메뉴 스크롤 이벤트 */
  const scrollToActiveMenu = () => {
    const activeMenu = document.querySelector('[data-active="true"]');
    if (activeMenu) {
      activeMenu.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const { popups } = usePopup();

  useEffect(() => {
    if (mobileLnbOpen) closeMobileLnb();
  }, [router.asPath]);

  useEffect(() => {
    scrollToActiveMenu();
  }, [mobileLnbOpen]);

  return (
    <Page>
      <Flex h="100vh" style={{ overflow: "hidden" }}>
        <SC.MainContainer>
          <SC.Main>{children}</SC.Main>
        </SC.MainContainer>
      </Flex>
      {/* 전역 popup 배열 */}
      {popups?.map((popup, index) => (
        <Popup key={`popup_${popup.id}_${index}`} {...popup} />
      ))}
    </Page>
  );
};

export default Layout;
