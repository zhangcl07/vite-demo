import React, { memo, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import {ReactComponent as RightArrowSVG} from '@/assets/svg/right_arrow.svg';
import './index.scss';

const Card = props => {
  const {
    headerNode, // 模块上面的扩展dom
    footerNode, // 模块下面的扩展dom
    className='', // 模块自定义class
    title, // 标题
    titleExt, // 标题右边扩展dom
    titleExtRightIcon, // 标题右边扩展icon
    titleExtCallback, // 右边扩展点击回调
    titleClassName='',
    children,
    containerPadding,
    ...rest
  } = props;

  // 是否展示标题扩展右侧箭头
  const titleExtArrow = useMemo(() => {
    return typeof titleExt === 'string' && titleExtCallback;
  }, [titleExt, titleExtCallback]);

  // 标题扩展的右侧icon
  const RightIcon = useMemo(()  => {
    return titleExtRightIcon || RightArrowSVG
  }, [titleExtRightIcon])

  /**
   * 标题扩展点击回调
   */
  const titleExtHandler = useCallback(() => {
    titleExtCallback();
  }, [titleExtCallback]);

  return (
    <div {...rest}
      className={classNames('demo-card', className)}>
      {headerNode ? <header className="demo-card-before">{headerNode}</header> : null}
      <section className="demo-card-container">
        {/* 有title或者扩展时，才会展示标题模块，如果自定义标题的话，title和titleExt不设置即可，在children中自定义 */}
        {title || titleExt ? (
          <header className={classNames('demo-card-title', titleClassName)}>
            <div className="demo-card-title_left">{title}</div>
            <div className="demo-card-title_right"
              onClick={titleExtHandler}>
              {titleExt}
              {titleExtArrow ? <RightIcon className="demo-card-arrow_style" /> : null}
            </div>
          </header>
        ) : null}
        <div className={classNames('demo-card-container-content', {noPadding: containerPadding === 0})}>{children}</div>
      </section>
      {footerNode ? <footer className="demo-card-footer">{footerNode}</footer> : null}
    </div>
  );
};

export default memo(Card);
