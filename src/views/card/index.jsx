import Card from '@/components/Card';
import { useCallback, useMemo, useState } from 'react';
import styles from './index.module.scss';

const PageCard = () => {
  const cardConfig = useMemo(() => {
    return {
      headerNode: '',
      title: '卡片标题',
      titleExt: '联系客服',
      titleExtCallback: () => {},
      className: 'product-info detail-card'
    }
  }, [])
  const [money, setMoney] = useState(0)
  const [cb, setCB] = useState(4.35)
  const onCBChange = useCallback((e) => {
    setCB(e.target.value)
  }, [])

  const [sl, setSL] = useState(3000)
  const onSLChange = useCallback((e) => {
    setSL(e.target.value)
  }, [])

  const [xj, setXJ] = useState(4.37)
  const onXJChange = useCallback((e) => {
    setXJ(e.target.value)
  }, [])

  const onSubmit = useCallback((e) => {
    console.log(e)
    e.preventDefault()
    const cbp = cb*sl;
    let a = 5;
    if(cbp > 10000){
      a = cbp * 0.0003
    }
    const m = (xj-cb)/cb*(cb*sl)-a;
    setMoney(m.toFixed(3))
  }, [xj, cb, sl])

  return (
    <Card {...cardConfig}>
      <div className={styles.content}>
        <form onSubmit={onSubmit}>
          <label key="cb">
            cb: <input type="number" value={cb} onChange={onCBChange}/>
          </label>
          <label key="sl">
            sl: <input type="number" value={sl} onChange={onSLChange}/>
          </label>
          <label key="xj">
            cb: <input type="number" value={xj} onChange={onXJChange}/>
          </label>
          <label>res: {money}</label>
          <label><input type="submit" value="submit"/></label>
        </form>
        <p>card测试内容</p>
      </div>
    </Card>
  )
}

export default PageCard
