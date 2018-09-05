// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { jsdom } from 'jsdom';

configure({ adapter: new Adapter() });
