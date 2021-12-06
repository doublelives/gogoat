import React, { FC, useEffect, useMemo, useState } from "react";
import { Button, Checkbox, List, Radio } from "antd";

const data = [
  {
    id: 1001,
    type: "done",
    content: "吃饭",
    selected: false,
  },
  {
    id: 1002,
    type: "undo",
    content: "睡觉",
    selected: false,
  },
  {
    id: 1003,
    type: "done",
    content: "打豆豆",
    selected: false,
  },
];

const TaskList: FC<{}> = () => {
  const [list, setList] = useState(data);
  const [taskType, setTaskType] = useState<"all" | "done" | "undo">("all");
  const dataList = useMemo(() => {
    return taskType === "all" ? list : list.filter((i) => i.type === taskType);
  }, [taskType, list]);
  const selectedAll = useMemo(
    () => !dataList.length ? false : dataList.every((d) => Boolean(d.selected)),
    [dataList]
  );
  const onChangeType = (e) => {
    setTaskType(e.target.value);
  };
  const onSelected = (s, id?: number) => {
    setList((l) =>
      l.map((i) => {
        id === i.id && (i.selected = s);
        return i;
      })
    );
  };
  const onSelectedAll = (e) => {
    setList((l) =>
      l.map((i) => {
        i.type === taskType ||
          (taskType === "all" && (i.selected = e.target.checked));
        return i;
      })
    );
  };
  const delSelected = () => {
    setList((l) => {
      return l.map((i) => (i.selected ? false : i)).filter((i) => Boolean(i));
    });
  };
  return (
    <>
      <Radio.Group onChange={onChangeType} value={taskType}>
        <Radio value="all">全部</Radio>
        <Radio value="done">已完成</Radio>
        <Radio value="undo">未完成</Radio>
      </Radio.Group>
      <List>
        <Checkbox
          disabled={list.length === 0}
          checked={selectedAll}
          onChange={onSelectedAll}
        >
          {!selectedAll ? "全选" : "取消全选"}
        </Checkbox>
        <Button
          disabled={!dataList.some((i) => Boolean(i.selected))}
          size="small"
          onClick={delSelected}
        >
          删除
        </Button>
        {dataList.map((task, idx) => {
          return (
            <List.Item key={task.id}>
              <Checkbox
                checked={task.selected}
                onChange={(e) => onSelected(e.target.checked, task.id)}
              >
                {task.content}
              </Checkbox>
            </List.Item>
          );
        })}
      </List>
    </>
  );
};

export default TaskList;
