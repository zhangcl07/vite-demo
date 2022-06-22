import { createRoot } from 'react-dom/client';
import RouterView from './router';
// import '../dist/style.css'
import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(<RouterView />)
