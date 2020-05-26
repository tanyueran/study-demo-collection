#include <stdio.h>

// 定义一个基本的链表结构
typedef int ElementType;

// 节点
typedef struct Node
{
    // 节点的数据
    ElementType ele;
    // 节点指向的下一个节点指针
    struct Node *next;
} Node;

// 定义linklist
typedef struct LinkList
{
    // 长度
    int size;
    // 头结点指针
    Node *top;
} LinkList;

// 获取
ElementType get(LinkList *list, int i)
{
    // 越界处理
    if (i < 0 || i > list->size)
    {
        // 越界本应该跑出异常，此处使用-1处理
        return -1;
    }
    else
    {
        int j = 0;
        Node *node = list->top->next;
        while (node != NULL)
        {
            if (j == i)
            {
                return node->ele;
            }
            else
            {
                j++;
                node = node->next;
            }
        }
        return -1;
    }
}

// 插入
int insert(LinkList *list, int i, Node *node)
{
    // 判断是否越界
    if (i < 0 || i > list->size)
    {
        return -1;
    }
    // 1、插入第一个。
    if (i == 0)
    {
        node->next = list->top->next;
        list->top->next = node;
        list->size++;
        return i;
    }
    Node *current = list->top->next; // 第一个节点
    int currentIndex = 0;
    while (current != NULL)
    {
        if (i == currentIndex)
        {
            node->next = current->next;
            current->next = node;
            list->size++;
            return i;
        }
        else
        {
            // 判断添加到最后一个
            if (list->size == i && currentIndex == list->size - 1)
            {
                node->next = current->next;
                current->next = node;
                list->size++;
                return i;
            }
            currentIndex++;
            current = current->next;
        }
    }
}

// 删除

// 链表打印
void toString(LinkList *list)
{
    Node *current = list->top->next;
    printf("tostring---start---\n");
    while (current != NULL)
    {
        printf("%d ", current->ele);
        current = current->next;
    }
    printf("\ntostring--end----\n");
}

void main()
{
    LinkList list;
    list.size = 0;
    list.top = NULL;
    // 头节点
    Node head;
    head.next = NULL;
    list.top = &head;
    Node node1 = {1, NULL};
    insert(&list, 0, &node1);
    Node node2 = {2, NULL};
    insert(&list, 1, &node2);
    Node node3 = {3, NULL};
    insert(&list, 2, &node3);
    toString(&list);
    printf("get 0 = %d\n", get(&list, 0));
    printf("get 1 = %d\n", get(&list, 1));
    printf("get 2 = %d\n", get(&list, 2));
}

/*
  c语言的函数局部函数变量，当方法执行完成后，会被清楚，所以处理数据结构时，都需要方法外部建立，然后传入指针。
 */