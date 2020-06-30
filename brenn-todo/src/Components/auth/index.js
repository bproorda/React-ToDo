import React from 'react';
import useAuth from '../../contexts/auth';

export default function Auth(props) {
    const { user, permissions } = useAuth();
    const { not, permission } = props;

    if (!user) {
        if (not)
            return props.children;

        return null;
    }

    // TODO: maybe add a `can` function in context to decide?
    if (permission) {
        if (permissions.includes(permission)) {
            return not ? null : props.children;
        }
        else {
            return not ? props.children : null;
        }
    }

    if (not)
        return null;

    return props.children;
}
