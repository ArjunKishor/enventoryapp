export interface CommentsDto {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCommentsModule(json: string): CommentsDto {
        return JSON.parse(json);
    }

    public static commentsModuleToJson(value: CommentsDto): string {
        return JSON.stringify(value);
    }
}
