#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// 定于元素类型
typedef int ElementType;
// 定于自定义栈类型
typedef struct
{
    // 栈类元素大小
    int size;
    // 动态数组空间
    ElementType *content;
} Statck;

// 初始化栈
void initStatck(Statck *p)
{
    p->size = 0;
    p->content = (ElementType *)malloc(sizeof(ElementType));
}

// 压入栈
void push(Statck *p, ElementType ele)
{
    (p->content)[p->size] = ele;
    // 动态数组空间扩容
    p->content = (ElementType *)realloc(p->content, sizeof(ElementType) * ((p->size) + 1));
    (p->size)++;
}

// 弹出
ElementType pop(Statck *p)
{
    ElementType ele = (p->content)[(p->size) - 1];
    p->content = (ElementType *)realloc(p->content, sizeof(ElementType) * (p->size));
    (p->size)--;
    return ele;
}

// 输除栈内容
void toString(Statck *p)
{
    printf("size=%d \n", p->size);
    for (int i = 0; i < (p->size); i++)
    {
        printf("%d = %d \n", i, (p->content)[i]);
    }
}

void main()
{
    Statck s;
    initStatck(&s);
    push(&s, 1);
    push(&s, 2);
    push(&s, 3);
    push(&s, 4);
    push(&s, 5);
    push(&s, 6);
    push(&s, 7);
    push(&s, 8);
    push(&s, 9);
    toString(&s);
    printf("pop one element\n");
    ElementType ele = pop(&s);
    printf("%d\n", ele);
    toString(&s);
    /* int *p = malloc(sizeof(int) * 6);
    p[0] = 0;
    p[1] = 1;
    p[2] = 2;
    p[3] = 3;
    p[4] = 4;
    p[5] = 5;
    p = realloc(p, sizeof(int) * 7);
    p[6] = 6;
    printf("%d\n", p[0]);
    printf("%d\n", p[1]);
    printf("%d\n", p[2]);
    printf("%d\n", p[3]);
    printf("%d\n", p[4]);
    printf("%d\n", p[5]);
    printf("%d\n", p[6]); */
}