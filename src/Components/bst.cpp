#include <iostream>
#include <malloc.h>
using namespace std;

struct node
{
    int data;
    node *left, *right;
};

node *newn(int k)
{
    node *tmp = (node *)malloc(sizeof(node));
    tmp->data = k;
    tmp->left = tmp->right = NULL;
    return tmp;
}

void insert(node *p, int k)
{
    while (1)
    {
        if (p->data > k)
        {
            if (p->left)
                p = p->left;
            else
            {
                p->left = newn(k);
                break;
            }
        }
        else
        {
            if (p->right)
                p = p->right;
            else
            {
                p->right = newn(k);
                break;
            }
        }
    }
}

node *create(int *arr, int n)
{
    node *root = newn(arr[0]);
    for (int i = 1; i < n; i++)
    {
        insert(root, arr[i]);
    }
    return root;
}

void inorder(node *root)
{
    if (root)
    {
        inorder(root->left);
        cout << root->data << "->";
        inorder(root->right);
    }
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    node *root = create(arr, n);
    inorder(root);
    return 0;
}