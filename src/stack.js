// Simple, lightweight queue implementation for ES6
// Author: Hakan Ozkok
// GPL (GNU General Public License)
module.exports = (() => {
    'use strict';
    const
        node = (item) => {
            return ({
                item: item,
                next: undefined
            });
        },
        push = (queueProps, item) => {
            let new_node = node(item);
            if (!queueProps.head)
                queueProps.head = new_node;
            else {
                new_node.next = queueProps.head;
                queueProps.head = new_node;
            }
            queueProps.len += 1;
            return item;
        },
        pop = (queueProps) => {
            if (!queueProps.head)
                return undefined;
            let popped_item = queueProps.head.item;
            queueProps.head = queueProps.head.next;
            queueProps.len -= 1;
            return popped_item;
        },
        toString = (queueProps) => {
            let items = [];
            (function tail_call(curr_node) {
                if (!curr_node) {
                    return;
                }
                items.push(curr_node.item);
                tail_call(curr_node.next);
            }(queueProps.head));
            return items.join(' -> ');
        };
    return () => {
        let self = {
                head: undefined,
                len: 0
            };
        return {
            push: (item) => push(self, item),
            pop: () => pop(self),
            len: () => self.len,
            toString: () => toString(self)
        };
    };
})();
