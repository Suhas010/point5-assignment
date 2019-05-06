import React from 'react';
import { Button, Tooltip } from 'antd';
import PropTypes from 'prop-types';

const ButtonWithoutTooltip = ({ name, className, onClick, type, loading, ...rest }) => (
  <Button
    className={className}
    onClick={onClick}
    type={type}
    loading={loading}
    {...rest}
  >
    {name}
  </Button>
);

const JButton = ({
  tooltip, ...rest
}) => {
  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        <ButtonWithoutTooltip {...rest} />
      </Tooltip>
    );
  }
  return <ButtonWithoutTooltip {...rest} />;
};

JButton.propTypes = {
  tooltip: PropTypes.string,
};

JButton.defaultProps = {
  tooltip: '',
};

ButtonWithoutTooltip.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'default']),
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
  loading: PropTypes.bool,
};

ButtonWithoutTooltip.defaultProps = {
  name: '',
  tooltip: '',
  type: 'default',
  className: 'j-button',
  onClick: () => {},
  loading: false,
};

export default JButton;
