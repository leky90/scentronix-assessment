import { ClickAwayListener, Popper, PopperPlacementType } from '@mui/base';
import { cloneElement, ReactElement, useState } from 'react';
import { Button } from '../button';
import { Add } from '@mui/icons-material';
import { cx } from 'class-variance-authority';
import { Backdrop, Fade } from '@mui/material';
import { ActionMenu } from './action-menu';
import { ActionMenuItem } from './action-menu-item';

type FloatActionMenuProps = {
  trigger: ReactElement;
  placement?: PopperPlacementType;
  items: ActionMenuItem[];
};

export function FloatActionMenu({
  trigger,
  items,
  placement = 'auto',
}: FloatActionMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const triggerButton = cloneElement(trigger, {
    onClick: handleClick,
  });

  return (
    <>
      <ClickAwayListener disableReactTree onClickAway={handleClose}>
        {open ? (
          <Button
            className="relative z-10"
            intent={'secondary'}
            shape={'circle'}
            onClick={handleClose}
          >
            <Add className="rotate-45" />
          </Button>
        ) : (
          triggerButton
        )}
      </ClickAwayListener>

      <Backdrop open={open} />

      <Popper id={id} open={open} anchorEl={anchorEl} placement={placement}>
        <Fade in={open} timeout={300}>
          <div className={cx('mx-4')}>
            <ActionMenu items={items} />
          </div>
        </Fade>
      </Popper>
    </>
  );
}
