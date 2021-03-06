import React, { Component } from "react";
import PropTypes from "prop-types";
import Paginator from "paginator";
import Page from "./Page";
import cx from "classnames";
import { Menu } from "semantic-ui-react";

export default class Pagination extends React.Component {
  static propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    lastPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    firstPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    disabledClass: PropTypes.string,
    hideDisabled: PropTypes.bool,
    hideNavigation: PropTypes.bool,
    innerClass: PropTypes.string,
    itemClass: PropTypes.string,
    linkClass: PropTypes.string,
    activeClass: PropTypes.string,
    activeLinkClass: PropTypes.string,
    linkClassFirst: PropTypes.string,
    linkClassPrev: PropTypes.string,
    linkClassNext: PropTypes.string,
    linkClassLast: PropTypes.string,
    hideFirstLastPages: PropTypes.bool,
    getPageUrl: PropTypes.func
  };

  static defaultProps = {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    prevPageText: "⟨",
    firstPageText: "«",
    nextPageText: "⟩",
    lastPageText: "»",
    innerClass: "pagination",
    itemClass: undefined,
    linkClass: undefined,
    activeLinkClass: undefined,
    hideFirstLastPages: false,
    getPageUrl: i => "#"
  };

  isFirstPageVisible(hasPreviousPage) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props;
    return (
      !hideNavigation &&
      !hideFirstLastPages &&
      !(hideDisabled && !hasPreviousPage)
    );
  }

  isPrevPageVisible(hasPreviousPage) {
    const { hideDisabled, hideNavigation } = this.props;
    return !hideNavigation && !(hideDisabled && !hasPreviousPage);
  }

  isNextPageVisible(hasNextPage) {
    const { hideDisabled, hideNavigation } = this.props;
    return !hideNavigation && !(hideDisabled && !hasNextPage);
  }

  isLastPageVisible(hasNextPage) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props;
    return (
      !hideNavigation && !hideFirstLastPages && !(hideDisabled && !hasNextPage)
    );
  }

  buildPages() {
    const pages = [];
    const {
      itemsCountPerPage,
      pageRangeDisplayed,
      activePage,
      prevPageText,
      nextPageText,
      firstPageText,
      lastPageText,
      totalItemsCount,
      onChange,
      activeClass,
      itemClass,
      activeLinkClass,
      disabledClass,
      hideDisabled,
      hideNavigation,
      linkClass,
      linkClassFirst,
      linkClassPrev,
      linkClassNext,
      linkClassLast,
      hideFirstLastPages,
      getPageUrl
    } = this.props;

    const paginationInfo = new Paginator(
      itemsCountPerPage,
      pageRangeDisplayed
    ).build(totalItemsCount, activePage);

    for (
      let i = paginationInfo.first_page;
      i <= paginationInfo.last_page;
      i++
    ) {
      pages.push(
        <Page
          isActive={i === activePage}
          key={i}
          href={getPageUrl(i)}
          pageNumber={i}
          pageText={i + ""}
          onClick={onChange}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
        />
      );
    }

    this.isPrevPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={"prev" + paginationInfo.previous_page}
          pageNumber={paginationInfo.previous_page}
          onClick={onChange}
          pageText={prevPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={itemClass}
          linkClass={cx(linkClass, linkClassPrev)}
          disabledClass={disabledClass}
        />
      );

    this.isFirstPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={"first"}
          pageNumber={1}
          onClick={onChange}
          pageText={firstPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={itemClass}
          linkClass={cx(linkClass, linkClassFirst)}
          disabledClass={disabledClass}
        />
      );

    this.isNextPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={"next" + paginationInfo.next_page}
          pageNumber={paginationInfo.next_page}
          onClick={onChange}
          pageText={nextPageText}
          isDisabled={!paginationInfo.has_next_page}
          itemClass={itemClass}
          linkClass={cx(linkClass, linkClassNext)}
          disabledClass={disabledClass}
        />
      );

    this.isLastPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={"last"}
          pageNumber={paginationInfo.total_pages}
          onClick={onChange}
          pageText={lastPageText}
          isDisabled={
            paginationInfo.current_page === paginationInfo.total_pages
          }
          itemClass={itemClass}
          linkClass={cx(linkClass, linkClassLast)}
          disabledClass={disabledClass}
        />
      );

    return pages;
  }

  render() {
    const pages = this.buildPages();
    return (
      <Menu floated="right" pagination>
        {pages}
      </Menu>
    );
  }
}
