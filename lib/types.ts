type Task = {
  completeBy: string;
  completed: boolean;
  category: number;
  createdAt: Date;
  description: string;
  email: string;
  id: number;
  important: boolean;
  title: string;
  updatedAt: Date;
};

type Session = {
  serverSession: {
    user: {
      email: string;
      name: string;
      image: string;
    };
  };
};

type ServerSession = {
  user: {
    email: string;
    name: string;
    image: string;
  };
};

type Tasks = {
  tasks: Task[];
};

type SP = {
  tasks: string;
  category: string;
  categoryName: string;
};

type Category = {
  id: number;
  email: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type Categories = {
  categories: Category[];
};
