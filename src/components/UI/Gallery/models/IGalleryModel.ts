export interface IGalleryModel extends IGalleryFolder {
    
}

interface IGalleryFolder {
    Name: string;
    Folders: IGalleryFolder[];
    Files: IGalleryFileInfo[]
}

interface IGalleryFileInfo {
    Name: string;
    Path: string
}
