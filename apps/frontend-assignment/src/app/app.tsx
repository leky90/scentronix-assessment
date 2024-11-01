import { ActionMenu, ActionMenuItem, FloatActionMenu } from './action-menu';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Button } from './button';

const ACTION_MENU_ITEMS: ActionMenuItem[] = [
  {
    option: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        50ml
      </Button>
    ),
    price: '€80.00',
  },
  {
    option: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        30ml
      </Button>
    ),
    price: '€60.00',
  },
  {
    option: (
      <Button intent={'ghost'}>
        <AddShoppingCartOutlined style={{ width: 16, height: 16 }} />
        5ml
      </Button>
    ),
    price: '€15.00',
    tags: ['3 x 5ml for € 40.00'],
  },
];

export function App() {
  return (
    <>
      <div className="fixed right-4 top-20">
        <FloatActionMenu
          trigger={
            <Button intent={'primary'}>
              <AddShoppingCartOutlined style={{ width: 16, height: 16 }} /> Buy
            </Button>
          }
          placement="left"
          items={ACTION_MENU_ITEMS}
        />
      </div>
      <div className="fixed right-4 bottom-10">
        <FloatActionMenu
          trigger={
            <Button intent={'primary'}>
              <AddShoppingCartOutlined style={{ width: 16, height: 16 }} /> Buy
            </Button>
          }
          placement="left-start"
          items={ACTION_MENU_ITEMS}
        />
      </div>
    </>
  );
}

export default App;
